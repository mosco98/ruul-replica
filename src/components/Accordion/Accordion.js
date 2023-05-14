import { AccordionContextProvider } from "./AccordionContext";

export default function Accordion({ children, defaultIndex }) {
  return (
    <AccordionContextProvider defaultIndex={defaultIndex}>
      <div className="space-y-7">{children}</div>
    </AccordionContextProvider>
  );
}
