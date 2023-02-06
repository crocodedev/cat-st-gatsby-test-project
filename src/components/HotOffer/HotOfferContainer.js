import Button from '../Button'
import {
  HotOfferWrapper,
  HotOfferTitle,
  HotOfferContent,
  HotOfferImage,
  HotOfferDescription,
  HotOfferDescriptionWrapper,
  HotOfferPrices,
  HotOfferSalePrice,
  HotOfferPrice,
} from './HotOfferView'

const HotOfferProducts = ({ marginBottom, variant }) => {
  return (
    <HotOfferWrapper variant={variant} marginBottom={marginBottom}>
      <HotOfferTitle>Only For Cool Cats And Cute Cats</HotOfferTitle>
      <HotOfferContent variant={variant}>
        <HotOfferImage src="./images/cat-street-hero-olive_2000.webp" />
        <HotOfferDescriptionWrapper variant={variant}>
          <HotOfferDescription>
            Add the “Catnip” cover to your order and save 5%
          </HotOfferDescription>
          <HotOfferPrices>
            <HotOfferSalePrice>$122.55</HotOfferSalePrice>
            <HotOfferPrice>$129.00</HotOfferPrice>
          </HotOfferPrices>

          <Button variant="light">Add now</Button>
        </HotOfferDescriptionWrapper>
      </HotOfferContent>
    </HotOfferWrapper>
  )
}

export default HotOfferProducts
