import React, { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Flex,
  Input,
  Textarea,
  Stack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  Text,
} from '@chakra-ui/react';

import emailjs from 'emailjs-com';

type Inputs = {
  message: string;
  email: string;
};

const ContactForm = () => {
  const form = useRef<HTMLFormElement | any>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      message: '',
      email: '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    emailjs
      .sendForm(
        process.env.service as string,
        process.env.template as string,
        form.current,
        process.env.user,
      )
      .then(
        () => {
          onOpen();
          reset();
        },
        error => {
          console.log(error.text);
        },
      );
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your message sended</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Thanks for your message. Please wait and we will response you!</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
      <form onSubmit={handleSubmit(onSubmit)} ref={form}>
        <Stack spacing={4}>
          <FormControl id="message">
            <FormLabel color="basic.0">Message</FormLabel>
            <Textarea
              placeholder="Your message"
              resize="vertical"
              {...register('message', { required: true })}
            />
            <FormErrorMessage>Required field</FormErrorMessage>
          </FormControl>
          <FormControl id="email">
            <FormLabel color="basic.0">Email adress</FormLabel>
            <Input
              placeholder="Your email"
              type="email"
              {...register('email', {
                required: true,
              })}
            />
            <FormErrorMessage>Required field</FormErrorMessage>
          </FormControl>

          <Flex justify="flex-end">
            <Button width="fit-content" type="submit" variant="primary">
              SEND
            </Button>
          </Flex>
        </Stack>
      </form>
    </>
  );
};

export default ContactForm;
