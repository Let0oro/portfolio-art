import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import "./index.css";
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "./components/ui/item";
import { Button } from "./components/ui/button";
import { TypographyH2 } from "./components/ui/typography";
import { Toggle } from "@radix-ui/react-toggle";
import ToggleTheme from "./components/modules/ToggleTheme";
import Header from "./components/modules/Header";


export function App() {
  return (
    <div className="container max-w-full mx-auto p-8 relative z-10 border-0 border-b-0">
      <ToggleTheme/>
      <Card className="border-0 border-b-0 shadow-">
        <CardHeader className="gap-4">
          <CardTitle>
            <Header/>
          </CardTitle>
          <CardDescription>
            
          </CardDescription>
        </CardHeader>
        <CardContent className="relative flex w-full h-96 gap-4">


        </CardContent>

      </Card>
    </div>
  );
}

export default App;
