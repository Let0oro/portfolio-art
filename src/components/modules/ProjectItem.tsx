import React from 'react'
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '../ui/item'
import { Button } from '../ui/button'

const ProjectItem = () => {
  return (
    <div>
<Item variant="outline">
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>
            A simple item with title and description.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}

export default ProjectItem
