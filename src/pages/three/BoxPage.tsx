import DrawerAppBar from '../../features/drawerAppBar/drawerAppBar';
import { SampleBox } from '../../features/three/box/sampleBox';
import { Canvas } from '@react-three/fiber'

const BoxPage = (): JSX.Element => {

  return (
    <>
    <DrawerAppBar />
    <br />
    <br />
    <Canvas>
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    <SampleBox position={[-1.2, 0, 0]} />
    <SampleBox position={[1.2, 0, 0]} />
    </Canvas>
    </>
  );
};

export default BoxPage;
