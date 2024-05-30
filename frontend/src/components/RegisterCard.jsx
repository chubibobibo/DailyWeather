//material tailwind imports
import { CardBody, Input, Checkbox } from "@material-tailwind/react";
function RegisterCard() {
  return (
    <CardBody className='flex flex-col gap-4'>
      <Input label='Name' type='text' name='name' size='lg' required />
      <Input label='Last Name' type='text' name='lastName' size='lg' required />
      <Input label='Email' type='email' name='email' size='lg' required />
      <Input
        label='Password'
        type='password'
        name='password'
        size='lg'
        required
      />
      <div className='-ml-2.5'>
        <Checkbox label='Remember Me' />
      </div>
    </CardBody>
  );
}
export default RegisterCard;
