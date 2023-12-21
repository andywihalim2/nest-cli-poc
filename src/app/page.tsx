import Button from "@/components/nest-tkpd/Button";

export default function Home() {
  return (
    <main>
      <h2>Tokopedia</h2>
      <h3>Button Variants</h3>
      <Button>default</Button>
      &ensp;
      <Button variant="ghost">ghost</Button>
      &ensp;
      <Button variant="text">text</Button>
      <h3>Button Colors</h3>
      <Button>default</Button>
      &ensp;
      <Button disabled color="alternate">alternate</Button>
      <br/>
      <br/>
      <Button>ghost</Button>
      &ensp;
      <Button variant="ghost" color="alternate">ghost alternate</Button>
      <br/>
      <br/>
      <Button variant="text">text</Button>
      &ensp;
      <Button variant="text" color="alternate">text alternate</Button>
      <h3>Button Size</h3>
      <Button size="xsmall">xsmall</Button>
      &ensp;
      <Button size="small">small</Button>
      &ensp;
      <Button>default</Button>
      &ensp;
      <Button size="large">large</Button>
      <h3>Button Block</h3>
      <Button block>default</Button>
    </main>
  )
}
