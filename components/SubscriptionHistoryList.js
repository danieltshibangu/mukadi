import SingleSubscriptionHistory from "./SingleSubscriptionHistory"


  const SubscriptionHistoryList = ({recentSub}) => {
      return (
          <>
          {recentSub.map((recentSub) => (
          <SingleSubscriptionHistory key={recentSub.id} recentSub={recentSub} />))}
          </>
      )
  }

  export default SubscriptionHistoryList