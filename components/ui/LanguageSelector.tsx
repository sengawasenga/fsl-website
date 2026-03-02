"use client";

import type { Selection } from "@heroui/react";
import { Button, Dropdown, Header, Label } from "@heroui/react";
import { Icon } from "@iconify/react";

export function LanguageSelector() {
  const handleSelectionChange = (keys: Selection) => {};

  const CustomCheckmarkIcon = (
    <svg
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="text-accent"
        clipRule="evenodd"
        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m3.1-8.55a.75.75 0 1 0-1.2-.9L7.419 8.858L6.03 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.13-.08z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );

  return (
    <Dropdown>
      <Button aria-label="Menu" isIconOnly className="rounded-full bg-primary">
        <Icon icon="solar:global-line-duotone" />
      </Button>
      <Dropdown.Popover className="min-w-[200px]">
        <Dropdown.Menu
          selectedKeys={new Set([])}
          selectionMode="single"
          onSelectionChange={handleSelectionChange}
        >
          <Dropdown.Section>
            <Header>Choisir la langue</Header>
            <Dropdown.Item id="fr" textValue="Français">
              <Dropdown.ItemIndicator>
                {({ isSelected }) => (isSelected ? CustomCheckmarkIcon : null)}
              </Dropdown.ItemIndicator>
              <Label>Français</Label>
            </Dropdown.Item>
            <Dropdown.Item id="en" textValue="English">
              <Dropdown.ItemIndicator>
                {({ isSelected }) => (isSelected ? CustomCheckmarkIcon : null)}
              </Dropdown.ItemIndicator>
              <Label>English</Label>
            </Dropdown.Item>
          </Dropdown.Section>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
