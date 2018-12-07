
componentDidUpdate(prevProps) {
  if (prevProps.friend.id === this.props.id) {
    ChatAPI.unsubscribeFromFriendStatus(prevProps.friend.id, handleStatusChange);
    ChatAPI.subscribeToFriendStatus(this.props.friend.id, handleStatusChange);
  }
}


useEffect(
  () => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  }, [props.friend.id]
); // 当且仅当id变化时修改订阅



const total = useMemo(() => {
  menuList.reduce(
    (prev, item) => prev + item.price * item.total,
    0
  )
}, [menuList])
