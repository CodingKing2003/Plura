"use client";

import { UserWithPermissionsAndSubAccounts } from "@/lib/types";
import { SubAccount, User } from "@prisma/client";
import React, { useState } from "react";
import { useModal } from "../providers/modal-provider";

type Props = {
  id: string | null;
  type: "agency" | "subaccount";
  userData?: Partial<User>;
  subAccounts?: SubAccount[];
};

const UserDetails = ({ id, type, userData, subAccounts }: Props) => {
  const [subAccountPermissions, setSubAccountsPermissions] =
    useState<UserWithPermissionsAndSubAccounts | null>(null);

    const { data, setClose } = useModal()

  return <div>UserDetails</div>;
};

export default UserDetails;
