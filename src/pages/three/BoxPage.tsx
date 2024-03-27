import DrawerAppBar from '../../features/drawerAppBar/drawerAppBar';
import { SampleBox } from '../../features/three/box/sampleBox';
import { Canvas } from '@react-three/fiber'

const BoxPage = (): JSX.Element => {

  return (
    <>
    <DrawerAppBar />
    <Canvas style={{ marginTop: "15vh" }}>
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    <SampleBox position={[-2.4, 0, -2.4]} />
    <SampleBox position={[2.4, 3.6, -3.6]} />
    </Canvas>
    </>
  );
};

export default BoxPage;
