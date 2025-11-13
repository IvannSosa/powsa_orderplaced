import React, { FC } from 'react'
import { ProductImage } from 'vtex.order-details'
import { useCssHandles } from 'vtex.css-handles'

import FormattedPrice from '../FormattedPrice'

interface Props {
  product: OrderItem[]
}

const CSS_HANDLES = [
  'productWrapper',
  'productImageColumn',
  'productImageWrapper',
  'productPrice',
  'productQuantity',
]

const Product: FC<Props> = ({ product }) => {
  const handles = useCssHandles(CSS_HANDLES)
  const totalPrice = product.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
  return (
    <div className={`${handles.productWrapper} w-100 flex-m tc tl-m`}>
      <div className={`${handles.productImageColumn} mr6-m mb6-s mb0-m`}>
        <div className={`${handles.productImageWrapper} w4 h4 center`}>
          <ProductImage url={product[0]?.imageUrl || ''} />
          {
            product.length > 1 && (
              <span className={`${handles.productQuantity}`}>+ {product.length - 1}</span>
            )
          }
        </div>
      </div>
      <div className={`${handles.productPrice} ml-auto mt3 mt0-m`}>
        <FormattedPrice value={totalPrice} />
      </div>
    </div>
  )
}

export default Product
