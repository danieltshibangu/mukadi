import supabase from "/supabase/supabase-config";

export default async function logout(req, res) {
   if (req.method === "POST") {

         const { error } = await supabase.auth.signOut();
         
         if (error) {
            console.log(error)
         } else {
            res.send(200);
         }
      }
   }
  

