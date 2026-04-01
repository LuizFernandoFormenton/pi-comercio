"use client"

import { usePathname } from "next/navigation"
import MenuLateral from "./Menu_lateral"

export default function LayoutWrapper({ children }) {

  const pathname = usePathname()

  const paginasSemMenu = ["/login", "/cadastro_comercios", "/", "/painel_adm_usuario", "/painel_aprovacao_anuncio", "/painel_gerenciar_comercios", "/cadastro_usuario"]

  const esconderMenu = paginasSemMenu.includes(pathname)

  return (
    <div className="container-fluid">
      <div className="row">
        
        {!esconderMenu && (
          <div className="col-2">
            <MenuLateral />
          </div>
        )}

        <div className={esconderMenu ? "col-12" : "col-10"}>
          {children}
        </div>

      </div>
    </div>
  )
}