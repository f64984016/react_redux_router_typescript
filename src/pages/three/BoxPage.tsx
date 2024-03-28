import DrawerAppBar from '../../features/drawerAppBar/drawerAppBar';
import { SampleBox } from '../../features/three/box/sampleBox';
import { Canvas } from '@react-three/fiber'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const BoxPage = (): JSX.Element => {

  return (
    <>
    <DrawerAppBar />
    <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <h1 style={{ fontSize: '4em' }}>React Three Fiber Demo</h1>
      </Box>
      <Canvas style={{ marginTop: "15vh" }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <SampleBox position={[-2.4, 0, -2.4]} />
      <SampleBox position={[2.4, 3.6, -3.6]} />
      </Canvas>
    </div>
    </>
  );
};

export default BoxPage;
