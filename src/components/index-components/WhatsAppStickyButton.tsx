import React from "react";

import { Link, useColorModeValue, keyframes } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppStickyButton = () => {
  const bgColor = useColorModeValue("#25D366", "#25D366"); // Adjust color based on light/dark mode

  const pulse = keyframes`
  0% {
    -moz-box-shadow: 0 0 0 0 rgb(37, 211, 102, 0.4);
    box-shadow: 0 0 0 0 rgb(37, 211, 102, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgb(37, 211, 102, 0.4);
      box-shadow: 0 0 0 7px rgb(37, 211, 102, 0.4);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgb(37, 211, 102, 0.4);
      box-shadow: 0 0 0 0 rgb(37, 211, 102, 0.4);
  }
  `;
  const pulseAnimation = `${pulse} 1.5s infinite`;

  return (
    <Link
      href="https://wa.me/+971585249920"
      isExternal
      position="fixed"
      bottom="4"
      left="4"
      zIndex="modal"
      p="2"
      borderRadius="full"
      backgroundColor={bgColor}
      _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
      animation={pulseAnimation}
    >
      <FaWhatsapp size={30} color="white" />
    </Link>
  );
};

export default WhatsAppStickyButton;
