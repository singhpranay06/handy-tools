
import { Button } from '@mantine/core';
import { SimpleGrid } from '@mantine/core';

export default function Home() {
  return (
    <main>
      <p>Hii this is our website handy-tools 😜</p>
    <SimpleGrid cols={2} spacing="xl" verticalSpacing="xl">
      <div>
        <Button component="a" href="/file_comp" size="lg">
          File compression
          
        </Button>
      </div>
      <div>
        <Button component="a" href="/bgr" size="lg">
          Background removal
        </Button>
      </div>
   
    </SimpleGrid>
    </main>
  )
}
