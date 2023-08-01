import {Unity,  useUnityContext } from 'react-unity-webgl';
import { Oval } from 'react-loader-spinner';
import { useEffect } from 'react';

export function App() {
  const { unityProvider, isLoaded, addEventListener, removeEventListener } = useUnityContext ({
    loaderUrl: 'build/SharkRun.loader.js',
    dataUrl: 'build/SharkRun.data.unityweb',
    frameworkUrl: 'build/SharkRun.framework.js.unityweb',
    codeUrl: 'build/SharkRun.wasm.unityweb',
  });

  useEffect(() => {
    addEventListener("CheckComplete", (e) => {
      if (e === 'true') {
        console.log('Game completed');
      }
    });
  }, [addEventListener, removeEventListener]);

  
  return (
    <div className='app-wrap'>
    {!isLoaded &&     
      <div className='loader-wrap'>
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div> 
    }
      <Unity unityProvider={unityProvider} style={{ width: '100vw', height: '100vh' }} />
    </div>
  );
}
