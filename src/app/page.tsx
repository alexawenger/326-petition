import Image from "next/image";
import Button from "../components/Button";

function addEntry() {

}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Button action = {addEntry}>Click to add entry</Button>
    </main>
  );
}
