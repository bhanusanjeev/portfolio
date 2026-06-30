import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    console.log(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    const formDataToSend = new FormData();

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

console.log("Access Key:", accessKey);

formDataToSend.append("access_key", accessKey);

    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setError("");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setSuccess(false);
        setError(result.message || "Something went wrong.");
      }
    } catch (err) {
      setSuccess(false);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-28"
    >
      <div className="mx-auto w-full max-w-4xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Contact
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-neutral-900 md:text-7xl">
            Let's build
            <br />
            something together.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500">
            Whether it's a full-time opportunity, freelance work or just a
            conversation about technology, I'd love to hear from you.
          </p>
        </motion.div>

        {/* Form */}

        <motion.form
          onSubmit={handleSubmit}
          className="mt-24 space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Honeypot */}

          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
          />

          {/* Name */}

          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              required
              className="
                peer
                w-full
                border-b
                border-neutral-300
                bg-transparent
                py-4
                text-lg
                outline-none
                transition-all
                duration-300
                focus:border-black
              "
            />

            <label
              htmlFor="name"
              className="
                absolute
                left-0
                top-4
                text-neutral-500
                transition-all
                duration-300

                peer-placeholder-shown:text-lg
                peer-placeholder-shown:top-4

                peer-focus:-top-3
                peer-focus:text-sm
                peer-focus:text-black

                peer-not-placeholder-shown:-top-3
                peer-not-placeholder-shown:text-sm
              "
            >
              Name
            </label>
          </div>

          {/* Email */}

          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              required
              className="
                peer
                w-full
                border-b
                border-neutral-300
                bg-transparent
                py-4
                text-lg
                outline-none
                transition-all
                duration-300
                focus:border-black
              "
            />

            <label
              htmlFor="email"
              className="
                absolute
                left-0
                top-4
                text-neutral-500
                transition-all
                duration-300

                peer-placeholder-shown:text-lg
                peer-placeholder-shown:top-4

                peer-focus:-top-3
                peer-focus:text-sm
                peer-focus:text-black

                peer-not-placeholder-shown:-top-3
                peer-not-placeholder-shown:text-sm
              "
            >
              Email
            </label>
          </div>

          {/* Message */}

          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              required
              className="
                peer
                w-full
                resize-none
                border-b
                border-neutral-300
                bg-transparent
                py-4
                text-lg
                outline-none
                transition-all
                duration-300
                focus:border-black
              "
            />

            <label
              htmlFor="message"
              className="
                absolute
                left-0
                top-4
                text-neutral-500
                transition-all
                duration-300

                peer-placeholder-shown:text-lg
                peer-placeholder-shown:top-4

                peer-focus:-top-3
                peer-focus:text-sm
                peer-focus:text-black

                peer-not-placeholder-shown:-top-3
                peer-not-placeholder-shown:text-sm
              "
            >
              Tell me about your project
            </label>
          </div>

          {/* Button */}

          <div className="flex justify-center pt-6">
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="
                rounded-full
                bg-black
                px-10
                py-4
                text-lg
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-neutral-800
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {loading
                ? "Sending..."
                : success
                ? "Sent ✓"
                : "Send →"}
            </motion.button>
          </div>

          {/* Messages */}

          {success && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-600"
            >
              Your message has been sent successfully.
            </motion.p>
          )}

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-red-500"
            >
              {error}
            </motion.p>
          )}
        </motion.form>

        {/* Divider */}

        <div className="my-20 h-px bg-neutral-200" />

        {/* Social Links */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 text-lg"
        >
          <a href="https://github.com/bhanusanjeev" className="transition hover:opacity-60">
            GitHub →
          </a>

          <a href="https://www.linkedin.com/in/s-bhanuprakash-nbkrist-976100270/" className="transition hover:opacity-60">
            LinkedIn →
          </a>

          <a
            href="mailto:bhanusanjeev19@gmail.com"
            className="transition hover:opacity-60"
          >
            Email →
          </a>
        </motion.div>

        {/* Signature */}

        <p className="mt-16 text-center text-sm text-neutral-400">
          Designed & Built by Bhanu Sanjeev
        </p>
      </div>
    </section>
  );
};

export default Contact;