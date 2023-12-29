import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    try {
      toast.promise(
        fetch("/api/contact.json", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        }),
        {
          loading: "Loading",
          success: "Got the data",
          error: "Error when fetching",
        }
      );
      // if (!res.ok) {
      //   throw new Error("error");
      // }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <p>
        Subscribe to get information, latest news and other interesting offers
        about Jadoo
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          <span className="sr-only">Your email</span>
          <input type="email" name="email" placeholder="Your email" />
        </label>
        <button type="submit">Subscribe</button>
      </form>
      <Toaster />
    </div>
  );
};
export default ContactForm;
