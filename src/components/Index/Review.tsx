import Image from "next/image";

interface ReviewItemProps {
  logo: string;
  review: string;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ logo, review }) => (
  <div className="flex flex-col items-center justify-between">
    <p className="tablet:mb-8 mb-4 text-center">{`"${review}"`}</p>
    <Image
      src={logo}
      alt="reviewing company"
      width={48}
      height={48}
      objectFit="contain"
    />
  </div>
);

export const Review = () => (
  <div className="font-extralight tablet:grid-flow-col tablet:gap-x-8 tablet:gap-y-0 gap-x-0 gap-y-4 grid w-full grid-flow-row px-8 py-16">
    <ReviewItem
      logo="/logo/github.png"
      review="Brilliant concept for 21st century entrepreneurs. Anyone can code now, but that doesn't mean that they should."
    />
    <ReviewItem
      logo="/logo/digitalocean.png"
      review="My sons and daughter started a new business from this web service. Super easy, and I would like to do my other business from this."
    />
    <ReviewItem
      logo="/logo/gitlab.png"
      review="A shocking new wave of no-coding trend. Webflow should be nervous, and so does WordPress and Wix."
    />
    <ReviewItem
      logo="/logo/aws.png"
      review="There's no other way to beat the community intellect. This platform suggests the next level of building your SaaS."
    />
  </div>
);
