"use client";

import { Button } from "./ui/button";
import { ArrowDownUpIcon } from "lucide-react";
import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";





const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
 

 

  return (
    <>
    <Button className="rounded-full" onClick={()=> setDialogIsOpen(true)}>
          Adicionar Transação <ArrowDownUpIcon className="ml-1" />
        </Button>
        
    <UpsertTransactionDialog  isOpen={dialogIsOpen} setIsOpen={setDialogIsOpen}  />
    </>
  );
};

export default AddTransactionButton;
