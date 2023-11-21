import { Button } from '@nextui-org/react';

const navButtons = ['Dashboard', 'Library', 'Lists'];

export default function Navigation() {
  return (
    <aside className="w-full flex-none p-2 md:col-start-1 md:row-start-1 md:row-span-2 bg-slate-800">
      <h4 className="text-3xl mb-6 text-center">AM</h4>
      <ul className="flex flex-col gap-1">
        {navButtons.map((button, index) => {
          return (
            <li key={index}>
              <Button radius="sm" className="justify-start bg-transparent text-1xl hover:bg-slate-700 w-[250px]">
                {`-> ${button}`}
              </Button>
            </li>)
        })}
      </ul>
    </aside>
  )
}