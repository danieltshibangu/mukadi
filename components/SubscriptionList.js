import { SubscriptionTab } from "./SubscriptionTab"


  const SubscriptionList = ({sub, onSelect}) => {
      return (
          <>
          {sub.map((sub) => (
          <SubscriptionTab key={sub.id} sub={sub} onSelect={onSelect} />))}
          </>
      )
  }

  export default SubscriptionList