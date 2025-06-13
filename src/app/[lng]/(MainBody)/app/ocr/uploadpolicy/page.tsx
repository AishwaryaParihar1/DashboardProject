"use client";

import { useState } from "react";
import {
  Card,
  CardBody,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button,
} from "reactstrap";

const UploadPolicyPage = () => {
  const [formData, setFormData] = useState({
    salesManager: "",
    pospAgent: "",
    caseType: "",
    commissionBasis: "",
    commissionReceivable: "",
    commissionPayable: "",
    commissionReceivableOD: "",
    commissionPayableOD: "",
    commissionReceivableTP: "",
    commissionPayableTP: "",
    vehicleClass: "",
    busType: "",
    miscDType: "",
    applicable: "",
    file: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files?.[0] || null,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const {
    commissionBasis,
    vehicleClass,
    busType,
    miscDType,
    applicable,
  } = formData;

  const showODTPInputs = commissionBasis === "OD and TP Premium";
  const showBusType = vehicleClass === "Bus";
  const showMiscDType = vehicleClass === "MISC-D";
  const showApplicable = vehicleClass === "GCV 3W" || vehicleClass === "PCV 3W";

  return (
    <div className="page-wrapper compact-wrapper">
      <Card className="">
        <CardBody>
          <h4 className="mb-4">Upload Policy</h4>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Upload File (PDF or ZIP)</Label>
              <Input
                type="file"
                accept=".pdf,.zip"
                onChange={handleFileChange}
              />
            </FormGroup>

            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>Sales Manager Name *</Label>
                  <Input
                    type="text"
                    name="salesManager"
                    value={formData.salesManager}
                    onChange={handleChange}
                    placeholder="Enter Sales Manager Name"
                    required
                  />
                </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <Label>POSP Agent *</Label>
                  <Input
                    type="text"
                    name="pospAgent"
                    value={formData.pospAgent}
                    onChange={handleChange}
                    placeholder="Enter POSP Agent Name"
                    required
                  />
                </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <Label>Case Type *</Label>
                  <Input
                    type="select"
                    name="caseType"
                    value={formData.caseType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Case Type</option>
                    <option value="New">New</option>
                    <option value="Renewal">Renewal</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Commission Details</h5>
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>Commission Payout Basis</Label>
                  <Input
                    type="select"
                    name="commissionBasis"
                    value={formData.commissionBasis}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="OD Premium">OD Premium</option>
                    <option value="TP Premium">TP Premium</option>
                    <option value="OD and TP Premium">
                      OD and TP Premium
                    </option>
                    <option value="Net Premium">Net Premium</option>
                    <option value="Total Premium">Total Premium</option>
                  </Input>
                </FormGroup>
              </Col>

              {!showODTPInputs && (
                <>
                  <Col md="4">
                    <FormGroup>
                      <Label>Commission Receivable (%)</Label>
                      <Input
                        type="text"
                        name="commissionReceivable"
                        value={formData.commissionReceivable}
                        onChange={handleChange}
                        placeholder="Enter %"
                      />
                    </FormGroup>
                  </Col>

                  <Col md="4">
                    <FormGroup>
                      <Label>Commission Payable</Label>
                      <Input
                        type="text"
                        name="commissionPayable"
                        value={formData.commissionPayable}
                        onChange={handleChange}
                        placeholder="Enter Amount"
                      />
                    </FormGroup>
                  </Col>
                </>
              )}

              {showODTPInputs && (
                <>
                  <Col md="3">
                    <FormGroup>
                      <Label>Commission Receivable % for OD</Label>
                      <Input
                        name="commissionReceivableOD"
                        value={formData.commissionReceivableOD}
                        onChange={handleChange}
                        placeholder="Enter %"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <Label>Commission Payable % for OD</Label>
                      <Input
                        name="commissionPayableOD"
                        value={formData.commissionPayableOD}
                        onChange={handleChange}
                        placeholder="Enter %"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <Label>Commission Receivable % for TP</Label>
                      <Input
                        name="commissionReceivableTP"
                        value={formData.commissionReceivableTP}
                        onChange={handleChange}
                        placeholder="Enter %"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <Label>Commission Payable % for TP</Label>
                      <Input
                        name="commissionPayableTP"
                        value={formData.commissionPayableTP}
                        onChange={handleChange}
                        placeholder="Enter %"
                      />
                    </FormGroup>
                  </Col>
                </>
              )}
            </Row>

            <Row className="mt-2">
              <Col md="4">
                <FormGroup>
                  <Label>Vehicle Class</Label>
                  <Input
                    type="select"
                    name="vehicleClass"
                    value={formData.vehicleClass}
                    onChange={handleChange}
                  >
                    <option value="">Select Vehicle Class</option>
                    <option value="Bus">Bus</option>
                    <option value="MISC-D">MISC-D</option>
                    <option value="PCV 3W">PCV 3W</option>
                    <option value="GCV 3W">GCV 3W</option>
                  </Input>
                </FormGroup>
              </Col>

              {showBusType && (
                <Col md="4">
                  <FormGroup>
                    <Label>Bus Type</Label>
                    <Input
                      type="select"
                      name="busType"
                      value={busType}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option>School Bus</option>
                      <option>Corporate / Staff Bus</option>
                      <option>Tourist Bus</option>
                      <option>Not Applicable</option>
                    </Input>
                  </FormGroup>
                </Col>
              )}

              {showMiscDType && (
                <Col md="4">
                  <FormGroup>
                    <Label>MISC-D Type</Label>
                    <Input
                      type="select"
                      name="miscDType"
                      value={miscDType}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option>Tractor</option>
                      <option>Other</option>
                      <option>Not Applicable</option>
                    </Input>
                  </FormGroup>
                </Col>
              )}

              {showApplicable && (
                <Col md="4">
                  <FormGroup>
                    <Label>Applicable?</Label>
                    <Input
                      type="select"
                      name="applicable"
                      value={applicable}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option>Yes</option>
                      <option>No</option>
                    </Input>
                  </FormGroup>
                </Col>
              )}
            </Row>

            <Button type="submit" color="primary" className="mt-4">
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default UploadPolicyPage;
