import { useState } from "react";
import { obligationTagsConfig } from "../../../Constants/company-tags-config";
import { ObligationType } from "../../../services/ManagementObligationService";

export function usePainelCustomerController() {
  const [obligationData, setObligationData] = useState<ObligationType[] | undefined>(undefined);

  return ({ obligationData, obligationTagsConfig });
}