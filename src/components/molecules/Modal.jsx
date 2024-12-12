// components/molecules/Modal/Modal.jsx
import {Modal as AntdModal} from "antd";
import {CloseOutlined} from "@ant-design/icons";
import Button from "../atoms/Button";

const Modal = ({isOpen, onClose, onClick, children, confirmText, cancelText, title}) => {
    return (
        <AntdModal
            open={isOpen}
            onCancel={onClose}
            footer={null}
            closable={false}
            centered
        >
            <h1 className="text-2xl text-bold text-center">{title}</h1>
            <div className="modal-content">{children}</div>
            <div className="flex justify-end gap-2 mt-4">
                <Button
                    onClick={onClose}
                    text={cancelText}
                    icon={<CloseOutlined />}
                    className="absolute top-2 right-2 z-10"
                />
                <div className="flex justify-end gap-2 mt-4 w-full">
                    <Button
                        type="primary"
                        onClick={onClick}
                        text={confirmText}
                        className="w-full p-5 text-base"
                    />
                </div>
            </div>
        </AntdModal>
    );
};

export default Modal;
