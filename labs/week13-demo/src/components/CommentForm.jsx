export default function CommentForm({ onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label htmlFor="body">Comment:</label>
                <textarea rows="5" name="body" />
            </div>
            <button>Submit</button>
        </form>
    )
}