import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')


const PurchaseModal = ({ modalIsOpen, closeModal}) => {

    return (
        <View>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Text style={{fontSize:30, color: "red", margin: 10}}>Booking Complete</Text>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({});

export default PurchaseModal;