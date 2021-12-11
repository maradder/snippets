// This file is a just a bunch of useful snippets that can be used in other projects


///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scroll to the bottom of a list of messages/comments/items as new elements are added

// Creates a list of comments
export default function CommentList(props){
	// Bring the parent card, other comments, and the current user in via props
    const { card, comments, user} = props

	// Establish a ref to monitor for new elements
    const messageEl = useRef(null);

	// Adds an event listener that will monitor the referenced element for new children.
	// When new child is added, the parent element is scrolled down by the height of the new child
    useEffect(() => {
      if (messageEl) {
        messageEl.current.addEventListener('DOMNodeInserted', event => {
          const { currentTarget: target } = event;
          target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
        });
      }
    }, [])
  

	// Render the list of comments.  The ref is attached to the parent element.
    return (
        <CommentsList ref={messageEl}>  
            
            {comments.length > 0 && comments?.map((comment, index) => <Comment 
                                                    key={index}
                                                    card={card}
                                                    comment={comment}
                                                    user={user}
                                                />)}
        </CommentsList>
    )
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////