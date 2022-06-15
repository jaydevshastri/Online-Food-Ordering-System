function ContactMessage({ name, email, message }) {
  return (
    <div className="contact-us-info-div">
      <div className="userinfo-div row">
        <span className="user-name  text-muted">{name}</span>
        <br />
        <span className="user-email text-muted">{email}</span>
      </div>
      <div>
        <p className="contact-message">{message}</p>
      </div>
    </div>
  );
}

export default ContactMessage;
