import { texto } from './fonts'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"


export const metadata = {
  title: "Seven | Dominatrix",
  description: "Vem capacho(a), venha conhecer sua Dona, sua Rainha e a razão pela qual você deve se ajoelhar. Prazer, sou Seven e nesse site você vai descobrir tudo o que precisa para entrar e desbravar um novo mundo.Se você já conhece esse mundo, apenas curve-se e entregue-se a sua Soberana",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="pt-br">
      <body className={`${texto.className}`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
