import React from 'react';
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
} from '@chakra-ui/react';

type Inputs = {
  message: string;
  email: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              pattern: emailPattern,
            })}
          />
          <FormErrorMessage>Required field</FormErrorMessage>
        </FormControl>

        <Flex justify="flex-end">
          <Button
            width="fit-content"
            onClick={e => {
              e.preventDefault();
            }}
            type="submit"
            variant="primary"
          >
            SEND
          </Button>
        </Flex>
      </Stack>
    </form>
  );
};

export default ContactForm;
