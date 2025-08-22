import { Button } from "@/components/ui/button";
import { Globe, Search } from "lucide-react";
import SearchDialog from "@/components/search/SearchDialog";

const ActionButtons = () => {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
        <Globe className="h-5 w-5" />
      </Button>
      <SearchDialog>
        <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
          <Search className="h-5 w-5" />
        </Button>
      </SearchDialog>
    </div>
  );
};

export default ActionButtons;