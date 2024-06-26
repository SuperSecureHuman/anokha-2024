import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function SimpleCard() {
  return (
    <Card className="mt-10 sm:w-[80%] md:mx-auto md:w-full rounded-xl shadow-lg bg-white mx-6 lg:w-[150%]  sm:ml-[10%] lg:right-[20%] relative">
      <CardBody className="flex justify-center p-6 sm:w-[100%] md:w-[100%] lg:w-[100%] h-full">
        <div className="w-full h-full sm:mx-2">
          <iframe
            width="102"
            height="280"
            src="https://www.youtube.com/embed/hiO-2K8ToA4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-[100%] mx-auto rounded-xl"
          ></iframe>
          <p className="text-lg text-center mt-2">
            Steps to register for the event
          </p>
        </div>
      </CardBody>
    </Card>
  );
}
