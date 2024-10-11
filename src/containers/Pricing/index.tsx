import './style.css'
// import { Polar } from "@polar-sh/sdk";
import PricingContainer from './PricingContainer'

// const polar = new Polar({
//   accessToken: process.env.POLAR_ACCESS_TOKEN ?? "",
// });

async function getProductInfo() {


  // try {
  //   const id = "19a6a164-d5a7-4e99-83eb-aa39e4d41de8"
  //   const result = await polar.products.get({
  //     id
  //   })
  //
  //   const productPrice = result.prices[0]
  //   const p = productPrice as any as { id: string, priceAmount: number, priceCurrency: string }
  //
  //   return {
  //     priceAmount: p.priceAmount / 100,
  //     priceCurrency: p.priceCurrency,
  //     link: `https://polar.sh/api/checkout?price=${p.id}`
  //   };
  // } catch (error) {
  //   console.log(error)
  return {
    priceAmount: -1,
    priceCurrency: 'USD',
    link: ``
  }
  // }
}

// export const revalidate = 10
export default async function Pricing() {
  const product = await getProductInfo()
  return <PricingContainer {...product} />
}
