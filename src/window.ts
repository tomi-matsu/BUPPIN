// Interference with global object "window"
interface MyWindow extends Window {
  nfc: any
}
// Override definition in global namespace
declare var window: MyWindow
export default window
