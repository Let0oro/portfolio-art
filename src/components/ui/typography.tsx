import * as SelectPrimitive from "@radix-ui/react-select";


function TypographyH1({children}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      {children}
    </h1>
  )
}
export function TypographyH2({children}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  )
}



export {
  TypographyH1
}