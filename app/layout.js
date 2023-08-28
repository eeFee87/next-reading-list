import './globals.css';

export const metadata = {
  title: 'Reading List',
  description: 'Listado de libros que estoy leyendo'
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body>
        <main className='grid min-h-screen grid-rows-[60px,1fr,60px] gap-4 max-w-screen-lg m-auto px-4'>
          <nav className='flex items-center text-2xl'>Listado de libros</nav>
          <section>{children}</section>
          <footer className='flex items-center justify-center'>Footer</footer>
        </main>
      </body>
    </html>
  );
}
