import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import "@/app/sass/RoomSceneCollectionVisualizer.scss"

export default function RoomSceneCollectionVisualizer() {

    
  return (
    <>
      <div className="roomvo-img-container flex justify-center items-center">
        <Tabs defaultValue="scene-1">
          <div className="roomvo-img">
            <TabsContent value="scene-1">
              <Image className="scene" src="/home/s1.png" height={400} width={400} alt=""></Image>
            </TabsContent>

            <TabsContent value="scene-2">
              <Image className="scene" src="/home/s2.png" height={400} width={400} alt=""></Image>
            </TabsContent>

            <TabsContent value="scene-3">
              <Image className="scene" src="/home/s3.png" height={400} width={400} alt=""></Image>
            </TabsContent>
          </div>

          {/*BUTTONS */}
          <div className="roomvo-buttons flex flex-col justify-between items-center">
            <TabsList>
              <TabsTrigger value="scene-1">
                <Image src="/home/r1.png" height={90} width={90} alt=""></Image>
              </TabsTrigger>
              <TabsTrigger value="scene-2">
                <Image src="/home/r2.png" height={90} width={90} alt=""></Image>
              </TabsTrigger>
              <TabsTrigger value="scene-3">
                <Image src="/home/r3.png" height={90} width={90} alt=""></Image>
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </div>
    </>
  );
}
