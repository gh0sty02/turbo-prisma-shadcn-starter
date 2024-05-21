"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@repo/ui/components/ui/popover";
import React from "react";

function Test() {
  return (
    <Popover>
      <PopoverTrigger>Hello</PopoverTrigger>
      <PopoverContent>Hello again</PopoverContent>
    </Popover>
  );
}

export default Test;
