import EventListener from './pages/EventListener.tsx'
import OnClick from './pages/OnClick.tsx'
import ReactOnClick from './pages/ReactOnClick.tsx'
import DispatchEvent from './pages/DispatchEvent.tsx'
import EventBubbling from './pages/EventBubbling.tsx'
import StopPropagation from './pages/StopPropagation.tsx'
import VariousInputs from './pages/VariousInputs.tsx'
import OnChange from './pages/OnChange.tsx'
import FileInput from './pages/FileInput.tsx'
import DragDrop from './pages/DragDrop.tsx'
import FileDrop from './pages/FileDrop.tsx'
function App() {
return (
<div>
<FileDrop />
<DragDrop />
<FileInput />
<OnChange />
<VariousInputs />
<StopPropagation />
<EventBubbling />
<DispatchEvent />
<ReactOnClick />
<OnClick />
<EventListener />
</div>
)
}
export default App