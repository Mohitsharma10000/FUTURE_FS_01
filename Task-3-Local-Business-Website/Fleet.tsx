@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 220 20% 20%;

    --card: 0 0% 100%;
    --card-foreground: 220 20% 20%;

    --popover: 0 0% 100%;
    --popover-foreground: 220 20% 20%;

    --primary: 222 100% 56%;
    --primary-foreground: 0 0% 100%;

    --secondary: 220 43% 97%;
    --secondary-foreground: 220 20% 20%;

    --muted: 220 43% 97%;
    --muted-foreground: 220 10% 50%;

    --accent: 213 100% 65%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 100%;

    --border: 220 20% 90%;
    --input: 220 20% 90%;
    --ring: 222 100% 56%;

    --radius: 0.75rem;

    --section-bg: 220 43% 97%;

    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 222 100% 56%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 213 100% 65%;
    --sidebar-accent-foreground: 0 0% 100%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 222 100% 56%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground font-sans antialiased;
    font-family: 'Poppins', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
  }
}

@layer utilities {
  .section-padding {
    @apply py-16 md:py-24 px-4;
  }
  .container-main {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
}

html {
  scroll-behavior: smooth;
}
