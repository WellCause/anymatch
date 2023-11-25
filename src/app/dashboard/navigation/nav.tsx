import clsx from "clsx";
import NavLinks from "./nav-links";
import NavLogo from "./nav-logo";

export default function Nav({ isNavMinimized, isNavHidden }: { isNavMinimized: boolean, isNavHidden: boolean }) {
  return (
    <aside className={clsx(
      "w-screen md:w-[250px] absolute top-[64px] md:top-auto md:relative overflow-hidden md:transition-width flex-none p-2 md:col-start-1 md:row-start-1 md:row-span-2 bg-slate-800",
      {
        "md:w-[56px]": isNavMinimized,
        "hidden md:block": isNavHidden
      }
    )}>
      <NavLogo className="hidden md:flex" />
      <ul className={clsx(
        "flex flex-col gap-1 transition-transform",
        {
          "md:translate-y-2": isNavMinimized,
        }
      )}>
        <NavLinks isNavMinimized={isNavMinimized} />
      </ul>
    </aside>
  )
}