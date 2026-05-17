const reveal = ScrollReveal({ reset: true });

// Seção topo
reveal.reveal('.scroll',    { duration: 2500, distance: '90px', origin: 'left' });
reveal.reveal('.scrollimg', { duration: 2500, distance: '90px', origin: 'right' });

// Títulos de seção
reveal.reveal('.titulo', { duration: 2500, distance: '90px', origin: 'top' });

// Especialidades
reveal.reveal('.especi',   { duration: 2500, distance: '90px' });
reveal.reveal('.especii',  { duration: 2500, distance: '90px' });
reveal.reveal('.especiii', { duration: 2500, distance: '90px' });

// Seção sobre
reveal.reveal('.efectsobreimg', { duration: 2500, distance: '90px', origin: 'left' });
reveal.reveal('.efectsobretxt', { duration: 2500, distance: '90px', origin: 'right' });

// Portfólio
reveal.reveal('.porti',   { duration: 2500, distance: '90px' });
reveal.reveal('.portii',  { duration: 2500, distance: '90px' });
reveal.reveal('.portiii', { duration: 2500, distance: '90px' });
