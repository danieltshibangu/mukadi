import React, { createContext, useState, useContext, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import supabase from "/supabase/supabase-config";
import axios from 'axios';

const AuthContext = createContext();
const DASHBOARD = 'http://localhost:5000/app'
const INTEGRATION = 'http://localhost:5000/integration'
const LOGIN = 'http://localhost:5000/login'

export const AuthProvider = ({children}) => {
    const router = useRouter();
    const [user, setUser] = useState(supabase.auth.user());
    const [isLoading, setIsLoading] = useState(true); 
    useEffect(() => {
        const getUserProfile = async () => {
            const sessionUser = supabase.auth.user();

            if (sessionUser) {
                const { data: profile } = await supabase
                    .from("profile")
                    .select("*")
                    .eq("id", sessionUser.id)
                    .single();

                setUser({
                    ...sessionUser, 
                    ...profile,
                });

                setIsLoading(false);
            }
        };

        getUserProfile();
        supabase.auth.onAuthStateChange(() => {
            getUserProfile();
        });
    }, []);
   

    useEffect(() => {
        axios.post('/api/set-supabase-cookie', {
            event: user ? 'SIGNED_IN' : 'SIGNED_OUT', 
            session: supabase.auth.session()
        })
    }, [user]);

    const login = async (new_email, new_password) => {
      const { data: success, error } = await supabase.auth.signIn({
          email: new_email, 
          password: new_password
      });
      // redirect to dashboard
      console.log(user) 

        //if (success === null) return false

      if (error) {
          console.log(error)
      } else {
          const integrationVerification = await axios.post('/api/check-integration');
          const status = integrationVerification.data.verified[0].isVerified;
            
           if (status == true) {
               router.push(DASHBOARD)
           } else if (status == false) {
               router.push(INTEGRATION)
           } 
      }
    }

    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
        router.push("/login");
}

    const exposed = {
        user, 
        login, 
        logout,
        isLoading,
    };

    return <AuthContext.Provider value={exposed}>{children}</AuthContext.Provider>
};


export const useAuth = () => useContext(AuthContext);