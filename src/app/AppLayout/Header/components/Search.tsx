import {
  Button, HStack, Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";
import {SearchIcon} from "@/common/icons";

export const Search = ({isOpen, onClose}: any) => {

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalBody>
            <HStack>
              <Input placeholder={'Search'}/>
              <Button w={'60px'} h={'60px'} p={'22px'}><SearchIcon color={'#fff'}/></Button>
            </HStack>

          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}