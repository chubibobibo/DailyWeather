//material tailwind imports
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

function Index() {
  return (
    <main className='h-screen'>
      <section className='hidden md:flex lg:flex'>
        <Card className='w-full max-w-[125rem] bg-[#eeeeee] flex-row mx-2 my-1'>
          <CardHeader
            shadow={false}
            floated={false}
            className='m-0 w-2/5 shrink-0 rounded-r-none'
          >
            <img
              src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
              alt='card-image'
              className='h-full w-full object-cover'
            />
          </CardHeader>
          <CardBody>
            <Typography variant='h6' color='gray' className='mb-4 uppercase'>
              startups
            </Typography>
            <Typography variant='h4' color='blue-gray' className='mb-2'>
              Lyft launching cross-platform service this week
            </Typography>
            <Typography color='gray' className='mb-8 font-normal'>
              Like so many organizations these days, Autodesk is a company in
              transition. It was until recently a traditional boxed software
              company selling licenses. Yet its own business model disruption is
              only part of the story
            </Typography>
            <a href='#' className='inline-block'>
              <Button variant='text' className='flex items-center gap-2'>
                Learn More
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                  className='h-4 w-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                  />
                </svg>
              </Button>
            </a>
          </CardBody>
        </Card>
      </section>
      {/* small screen */}
      <section className='flex my-1 mx-2 justify-center md:hidden'>
        <Card className='max-w-[24rem] overflow-hidden bg-[#eeeeee]'>
          <CardHeader
            floated={false}
            shadow={false}
            color='transparent'
            className='m-0 rounded-none'
          >
            <img
              src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
              alt='ui/ux review check'
            />
          </CardHeader>
          <CardBody>
            <Typography variant='h4' color='blue-gray'>
              UI/UX Review Check
            </Typography>
            <Typography
              variant='lead'
              color='gray'
              className='mt-3 font-normal'
            >
              Because it&apos;s about motivating the doers. Because I&apos;m
              here to follow my dreams and inspire others.
            </Typography>
          </CardBody>
          <CardFooter className='flex items-center justify-between'>
            <div className='flex items-center -space-x-3'>
              <Tooltip content='Natali Craig'>
                <Avatar
                  size='sm'
                  variant='circular'
                  alt='natali craig'
                  src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80'
                  className='border-2 border-white hover:z-10'
                />
              </Tooltip>
              <Tooltip content='Tania Andrew'>
                <Avatar
                  size='sm'
                  variant='circular'
                  alt='tania andrew'
                  src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
                  className='border-2 border-white hover:z-10'
                />
              </Tooltip>
            </div>
            <Typography className='font-normal'>January 10</Typography>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
export default Index;
