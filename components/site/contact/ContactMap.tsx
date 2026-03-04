"use client";

const ContactMap = () => {
  return (
    <section className="pb-24 px-6 max-w-7xl mx-auto">
      <div className="w-full h-[500px] rounded-[2rem] overflow-hidden border border-foreground/10 shadow-sm relative group">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15915.688846937517!2d15.263884814987053!3d-4.3312569501460395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3152011ebd97%3A0xeab49ccb0c7490f2!2sKintambo%2C%20Kinshasa%2C%20R%C3%A9publique%20d%C3%A9mocratique%20du%20Congo!5e0!3m2!1sfr!2sfr!4v1709593257850!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: "grayscale(0.8) contrast(1.1) opacity(0.8)",
          }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="group-hover:filter-none transition-all duration-700"
        ></iframe>

        {/* Overlay pour garder le style institutionnel (désactivé au hover pour manipuler la carte) */}
        <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:bg-transparent transition-colors duration-700"></div>
      </div>
    </section>
  );
};

export default ContactMap;
