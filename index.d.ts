type MyGlobalFunctionType = (name: string) => void

interface Window {
  printDiv: MyGlobalFunctionType
}

declare const printDiv: MyGlobalFunctionType;