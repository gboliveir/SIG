import { useState } from "react";
import { obligationTagsConfig } from "../../../Constants/tagsConfig";
import { ObligationType } from "../../../services/CustomerService";

export function usePainelCustomerController() {
  const [obligationData, setObligationData] = useState<ObligationType[] | undefined>(undefined);

  return ({ obligationData, obligationTagsConfig });
}